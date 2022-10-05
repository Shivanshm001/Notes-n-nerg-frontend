import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner';
import axios from 'axios';
import Input from './Input';
import {baseUrl} from '../../../websiteUrl';


function Label(props) {
  return <label htmlFor={props.for} className="text-xs font-semibold pl-2 pb-2">{props.text}*</label>
}


export default function Form({ filetype: fileT }) {
  const [textData, setTextData] = useState({
    title: "",
    des: "",
    sem: "",
  });
  const [isSubmiting, setIsSubmiting] = useState(undefined);
  const [file, setFile] = useState();
  const [link, setLink] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmiting(true);
    const formData = new FormData();

    if (fileT !== "link") formData.append(`${fileT}`, file)
    else formData.append("link", link);
    //Appending the text feilds in form object
    formData.append("title", textData.title);
    formData.append("des", textData.des);
    formData.append("sem", textData.sem);
    formData.append("type", fileT)
    try {
      const response = await axios.post(`${baseUrl}/upload/${fileT}`, formData, { headers: "ContentType: multipart/form-data" });
      if (response.status === 200)
        navigate("/");

    } catch (error) {
      console.log(error)
    }
    //After successful
    setIsSubmiting(false)
  }


  function handleTextInput(event) {
    const { value, name } = event.target;
    setTextData((prevData) => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }

  function selectedFile(e) { const file = e.target.files[0]; setFile(file); }

  function selectedLink(e) { const { value } = e.target; setLink(value); }

  return (
    <form className='sm:max-w-[60vw] w-full p-4 flex flex-col gap-8' onSubmit={handleSubmit}>

      {/* If filetype selected by user is "link" render the First input otherwise render the Second input */}
      {fileT === "link" ?
        // First input 
        <div>
          <Label for="url" text="Paste link*" />
          <Input
            placeholder="Paste URL"
            name="link"
            type="url"
            id="url"
            r={true}
            inputAction={selectedLink}
            value={link}
          />
        </div>
        :
        //Second Input
        <div>
          <Label for={`${fileT}s`} text="Upload" />
          <Input
            placeholder="Upload"
            name={fileT}
            type="file"
            id={`${fileT}s`}
            r={true}
            inputAction={selectedFile}
            accept="image/*,.pdf"
          />
        </div>
      }

      <div>
        <Label for="title" text="Title" />
        <Input
          placeholder="Title"
          type="text"
          name="title"
          id="title"
          r={true}
          inputAction={handleTextInput}
          value={textData.title}
        />
      </div>

      <div className='flex flex-col'>
        <Label for="description" text="Description" />
        <textarea
          id="description"
          name="des"
          className="border border-gray-500 p-2 placeholder:text-sm"
          onChange={handleTextInput}
          value={textData.des}
        />
      </div>


      <div className='w-full flex justify-between'>
        <div>
          <select required={true} value={textData.sem} onChange={handleTextInput} name="sem" className='border border-blue-500 focus:outline-none rounded px-2 text-sm'>
            <option value="">Semester</option>
            <option value="sem 1">Sem 1</option>
            <option value="sem 2">Sem 2</option>
            <option value="sem 3">Sem 3</option>
            <option value="sem 4">Sem 4</option>
            <option value="sem 5">Sem 5</option>
            <option value="sem 6">Sem 6</option>
            <option value="sem 7">Sem 7</option>
            <option value="sem 8">Sem 8</option>
          </select>
        </div>
        <button className={`${isSubmiting ? "bg-blue-400" : "bg-blue-500"} font-semibold hover:bg-blue-700 rounded text-white py-2 px-3`}>{isSubmiting ? <h1> Uploading...</h1> : <h1><Spinner />Upload</h1>}</button>
      </div>
    </form>
  )
}
