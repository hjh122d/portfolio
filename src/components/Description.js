import React from "react";
import styled from "styled-components";


const Description = ({ description }) => {
  const urlReg =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/;
  const replace = (description) => {
    const convertDescription = description.replace(urlReg, function (url) {
      return '<a href="' + url + '" target="_blank">' + url + "</a>";
    });
    const htmlArr = [];
    convertDescription.split("\n").forEach(function (text) {
      const textHtml = "<span>" + text + "<br /></span>";
      htmlArr.push(textHtml);
    });

    return { __html: htmlArr.join("") };
  };

  return (
    // <p>
    //   {desc.split("\n").map((txt, i) => (
    //     <span key={i}>
    //       {txt}
    //       <br />
    //     </span>
    //   ))}
    // </p>
    <p dangerouslySetInnerHTML={replace(description)}></p>
  );
};

export default Description;
