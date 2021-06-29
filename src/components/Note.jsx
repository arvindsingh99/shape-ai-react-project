import React from "react";

const notes = [{
    header: "Javascript and React.js",
    content: "This is a bootcamp taken by Shape AI covering about Javascript and React.js from the Basics."
}, {
    header: "Typescript and Angular",
    content: "This is a bootcamp taken by Shape AI covering about Typescript and Angular from the Basics."
}, {
    header: "Dart and Flutter",
    content: "This is a bootcamp taken by Shape AI covering about Dart and Flutter from the Basics."
}];

class Note extends React.Component {
    render() {
        return (
            <div>
                {
                    notes.map((noteContent) => (
                        <div className="note">
                            <h1>{noteContent.header}</h1>
                            <p>{noteContent.content}</p>
                        </div>
                    ))
                }
            </div>
        );
    }

}

export default Note;
