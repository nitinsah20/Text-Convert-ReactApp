import { useState } from 'react'
import './App.css'

function App() {
  const [text, settext] = useState("Hay! Enter Your text");
  // console.log(text);
  // const set = settext("")
  const handleUpClick = () => {
    // console.log("uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    settext(newtext)
  }

 const  handleLoClick = () => {
  settext(text.toLowerCase());
 }

  const handleOnChange = (event) => {
    
    settext(event.target.value);
  };
  // console.log(handleConvet);

  return (
    <>
      <div>
        <h1 className="text-center text-3xl font-semibold">
          Case Converter <br /> Your Online Tool for Lower, Upper, Title,
          Capital, and Sentence <br /> Case Conversion
        </h1>
        <div className="min-h-screen flex flex-col items-center p-4 bg-gray-100">
          <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Input Side */}
            <textarea
              className="border rounded p-3 h-48 resize-none"
              value={text}
              onChange={handleOnChange}
            />
            {/* Output Side */}
            <div className="relative">
              <textarea
                className="border rounded p-3 h-48 w-full resize-none"
                readOnly
              />
              <button className="absolute top-2 right-2 bg-indigo-600 text-white px-3 py-1 rounded">
                Copy
              </button>
            </div>
          </div>

          {/* Style Buttons */}
          <div className="flex flex-wrap gap-2 mt-4">
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
              onClick={handleUpClick}
            >
              UPPERCASE
            </button>

            <button
             
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
              onClick={handleLoClick}
            >
              Lowercase
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
