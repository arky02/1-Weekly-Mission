import "./TagBtnContainer.css";
import AddImg from "../../assets/image/icon-add.svg";
import { useEffect, useState, useRef } from "react";

// < 각각의 tag btn response Example >
// {
//   "id": 17,
//   "created_at": "2023-06-04T21:00:22.007605+00:00",
//   "name": "나만의 장소",
//   "user_id": 1
// }

const tagBtnStyle = {
  width: "16px",
  height: "16px",
};

function TagBtnContainer({ folderTagBtnList, selectedTag, handleOnClick }) {
  return (
    <>
      {console.log({ folderTagBtnList })}
      <div className="tag_div">
        <div className="tag_container">
          {folderTagBtnList.map((data) => {
            const TagBtnClass = data.id === selectedTag ? "tag checked" : "tag";

            return (
              <button
                className={TagBtnClass}
                id={data?.id}
                onClick={() => handleOnClick(data?.id, data?.name)}
              >
                {data?.name}
              </button>
            );
          })}
        </div>

        <div className="tag-InnerText">
          <h4 className="tag-InnerText_text">폴더 추가</h4>
          <img src={AddImg} style={tagBtnStyle} alt="add icon" />
        </div>
      </div>
    </>
  );
}

export default TagBtnContainer;
