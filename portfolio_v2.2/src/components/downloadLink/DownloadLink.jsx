const DownloadLink = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "https://drive.google.com/drive/folders/1FfiwMnWoRvqVLEN5iXIOkromocRSNoO-?usp=sharing"; // Replace with the path to your Word file
    link.setAttribute('download', 'example.docx');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
     <button onClick={handleDownload} className='absolute left-1/4 bottom-3 w-36 h-10 text-black bg-yellow rounded-lg cursor-pointer text-lg text-center capitalize hover:bg-slate-300 hover:text-black duration-100 active:bg-violet-700 active:scale-75'>Résumé &dArr;</button>
    </div>
  );
};

export default DownloadLink;