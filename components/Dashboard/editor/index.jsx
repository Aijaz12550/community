import React from "react";
import { Editor } from "@tinymce/tinymce-react";

class App extends React.Component {
  handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content,"-----", editor);
  };

  render() {
    return (
      <Editor
      style={{
          width:"100%"
      }}
        id="tiny-react_79043037261588676382779"
        initialValue="<p>This is the initial content of the editor</p>"
        apiKey={process.env.EDITOR_KEY}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "a11ychecker advcode casechange formatpainter linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste table advtable  tinymcespellchecker",
          ],
          toolbar:
          'a11ycheck addcomment showcomments casechange checklist code formatpainter pageembed permanentpen table',
          toolbar_mode: 'floating',
      tinycomments_mode: 'embedded',
      tinycomments_author: 'Author name'
        }}
        onEditorChange={this.handleEditorChange}
      />
    );
  }
}

export default App;