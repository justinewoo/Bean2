import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Video from "twilio-video";
import '../rooms.css'

export default class VideoComponent extends Component {
    constructor(props) {
        super(props);
        this.activeRoom = null;
        this.previewTracks = null;
        this.identity = null;
        this.roomName = null;
        this.roomJoined = this.roomJoined.bind(this);
        this.state = {
            toDoc: false
        }
    }

    componentDidMount() {
        window.addEventListener("beforeunload", this.leaveRoomIfJoined);
        this.refs.buttonPreview.onclick = ()=> {
            var localTracksPromise = this.previewTracks
                ? Promise.resolve(this.previewTracks)
                : Video.createLocalTracks();

            localTracksPromise.then(
                (tracks)=> {
                    window.previewTracks = this.previewTracks = tracks;
                    var previewContainer = document.getElementById("local-media");
                    if (!previewContainer.querySelector("video")) {
                        this.attachTracks(tracks, previewContainer);
                    }
                },
                (error)=> {
                    this.log("Unable to access Camera and Microphon");
                }
            );
        };
        console.log("sup")
        axios.get("http://45.79.228.167:8000/token", {
            params: {
                roomName: localStorage.getItem("roomid")
            }
        }).then(results => {
            this.identity = results.data.identity;
            this.refs.roomControls.style.display = "block";

            // Bind button to join Room.

                this.log("Joining room '" + this.roomName + "'...");
                var connectOptions = {
                    name: this.roomName,
                    logLevel: "debug"
                };

                if (this.previewTracks) {
                    connectOptions.tracks = this.previewTracks;
                }

                // Join the Room with the token from the server and the
                // LocalParticipant's Tracks.
                console.log(results.data.token)
                Video.connect(results.data.token, connectOptions).then(this.roomJoined, (error)=> {
                    this.log("Could not connect to Twilio: " + error.message);
                });

            // Bind button to leave Room.
            this.refs.buttonLeave.onclick = ()=> {
                this.log("Leaving room...");
                this.activeRoom.disconnect();
            };
        });
    }
    _readDoc = () => {
		var self = this;
		self.setState({toDoc:true})
	}

    attachTracks(tracks, container) {
        tracks.forEach((track)=> {
            if (track.track !== null) {
                console.log("BICKHELLO " + JSON.stringify(track));
                container.appendChild(track.track.attach());
            }
        });
    }

    attachParticipantTracks(participant, container) {
        var tracks = Array.from(participant.tracks.values());
        this.attachTracks(tracks, container);
    }
    

    detachTracks(tracks) {
        tracks.forEach((track)=> {
            if (track.track !== null) {
                track.track.detach().forEach((detachedElement)=> {
                    detachedElement.remove();
                });
            }
        });
    }

    detachParticipantTracks(participant) {
        if (this !== undefined) {
            var tracks = Array.from(participant.tracks.values());
            this.detachTracks(tracks);
        }
    }

    log(message) {
        var logDiv = this.refs.log;
        logDiv.innerHTML += "<p>&gt;&nbsp;" + message + "</p>";
        logDiv.scrollTop = logDiv.scrollHeight;
    }


    roomJoined(room) {
        this.activeRoom = room;
        window.room = room.name;

        this.log("Joined as '" + this.identity + "'");
        this.refs.buttonJoin.style.display = "none";
        this.refs.buttonLeave.style.display = "inline";

        // Attach LocalParticipant's Tracks, if not already attached.
        var previewContainer = this.refs.localMedia;
        if (!previewContainer.querySelector("video")) {
            this.attachParticipantTracks(room.localParticipant, previewContainer);
        }

        // Attach the Tracks of the Room's Participants.
        room.participants.forEach((participant)=> {
            this.log("Already in Room: '" + participant.identity + "'");
            var previewContainer = document.getElementById("remote-media");
            this.attachParticipantTracks(participant, previewContainer);
        });

        // When a Participant joins the Room, log the event.
        room.on("participantConnected", (participant)=> {
            this.log("Joining: '" + participant.identity + "'");
        });

        // When a Participant adds a Track, attach it to the DOM.
        room.on("trackAdded", (track, participant)=> {
            this.log(participant.identity + " added track: " + track.kind);
            var previewContainer = document.getElementById("remote-media");
            this.attachTracks([track], previewContainer);
        });

        // When a Participant removes a Track, detach it from the DOM.
        room.on("trackRemoved", (track, participant)=> {
            this.log(participant.identity + " removed track: " + track.kind);
            this.detachTracks([track]);
        });

        // When a Participant leaves the Room, detach its Tracks.
        room.on("participantDisconnected", (participant)=> {
            this.log("Participant '" + participant.identity + "' left the room");
            this.detachParticipantTracks(participant);
        });

        // Once the LocalParticipant leaves the room, detach the Tracks
        // of all Participants, including that of the LocalParticipant.
        room.on("disconnected", ()=> {
            this.log("Left");
            if (this.previewTracks) {
                this.previewTracks.forEach((track)=> {
                    track.stop();
                });
            }
            this.detachParticipantTracks(room.localParticipant);
            room.participants.forEach(this.detachParticipantTracks);
            this.activeRoom = null;
            this.refs.buttonJoin.style.display = "inline";
            document.getElementById("button-leave").style.display = "none";
        });
    }

    leaveRoomIfJoined() {
        if (this.activeRoom) {
            this.activeRoom.disconnect();
        }
    }

    render() {
        if(this.state.toDoc === true){
			return <Redirect to='/documents'/>
		}
        return (
        	<div>
        	      <div className = "App-contact" id = "controls" >
      	
      	<div
      		className = "Rooms-header"
      		ref = "roomControls"

      	
      	>
      		<h1
			>
			"Video"</h1>
			<button
				style = {{ position: "absolute", marginLeft: 500, 
					}}
				ref="buttonLeave" id = "button-leave"
				>End Video</button>
			</div></div>
            <div style = {{display: "flex", justifyContents: "center", alignItems: "center", paddingLeft: 90}}>
                <div id="controls">
                    <div id="preview">
                        <div ref="localMedia" id="local-media"></div>
                        <button ref="buttonPreview" id="button-preview">Join</button>
                    </div>
                    <div ref="roomControls">
                        <button ref="buttonLeave" id="button-leave">Leave Room</button>                        
                        <button ref="buttonJoin" id="button-join">Join Room</button>
                        <button onClick = {() => {this._readDoc()}}>Document Room</button>

                        <div ref="remoteMedia" id="remote-media"></div>


                    </div>
                    <div ref="log" id="log"></div>
                </div>
            </div>
            </div>
        );
    }
}