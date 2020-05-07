import React from "react";
import { Editor } from "@tinymce/tinymce-react";

class EditorComponent  extends React.Component {
  handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content, "-----", editor);
  };

  render() {
    return (
      <Editor
        style={{
          width: "100%",
        }}
        id="tiny-react_79043037261588676382779"
        initialValue="<p>This is the initial content of the editor</p>"
        apiKey={process.env.EDITOR_KEY}
        init={{
            // height: 500,
            draggable_modal :true,
          menubar: false,
          plugins: [
            "a11ychecker advcode  casechange formatpainter linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste table advtable  tinymcespellchecker",
          ],
          toolbar: "a11ycheck addcomment showcomments casechange forecolor backcolor checklist code formatpainter pageembed permanentpen table js css bold color insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
            content_css: '//www.tiny.cloud/css/codepen.min.css',
          toolbar_mode: "floating",
          allow_script_urls: true,
          anchor_bottom: false,
          anchor_top: false,
          images_upload_credentials: true
        }}
        onEditorChange={this.handleEditorChange}
      />
    );
  }
}

export default EditorComponent ;
