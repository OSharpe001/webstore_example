import { useState, useEffect } from "react";
import uploadImageToCloudinary from '../utils/uploadCloudinary';


export default function RequestForm() {

  const [formData, setFormData] = useState({
    requestText: "",
    requestPhoto: ""
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    // console.log(file);

    const data = await uploadImageToCloudinary(file);
    // console.log(data);

    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  return <section className="request-form">
    <h1 className="welcome underline">Make Your Special Request!</h1>
    <form>
      <label className="request-box-label" htmlFor="request-box">Your Request</label>
      <textarea className="request-box-mobile" name="request-box" id="request-box" cols="25" rows="10" placeholder="Please explain your request, here. . ."></textarea>
      <textarea className="request-box-desktop" name="request-box" id="request-box" cols="100" rows="10" placeholder="Please explain your request, here. . ."></textarea>

      <div className="mb-5 flex items-center gap-3">
        {formData.photo && <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-solid border-primaryColor flex items-center justify-center'>
          <img src={formData.photo} alt="" className='w-full rounded-full' />
        </figure>}

        <div className='relative w-[130px] h-[50px]'>
          <input
            type="file"
            name='photo'
            id='customFile'
            onChange={handleFileInputChange}
            accept='.jpg, .png'
            className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
          />

          <label
            htmlFor="customFile"
            className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'
          >
            {selectedFile ? selectedFile.name : "Upload Photo"}
          </label>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  </section>
}