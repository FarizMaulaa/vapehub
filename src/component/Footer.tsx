const Footer = () => {
  return (
    
    <div>
      <footer className="footer p-6 bg-gray-200 text-base-content  font-inter mt-3">
        <p className=" text-2xl xl:text-xl font-inter">
          vapehub.co
        </p>
        <nav>
          <h6 className="footer-title">Sosial</h6>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Tiktok</a>
        </nav>
        <nav>
          <h6 className="footer-title mt-3">Lokasi</h6>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.535196363674!2d107.16658007409782!3d-6.324611661885304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699b0c08ad8d01%3A0x2b18001d1b1371f9!2sUNIVERSITAS%20PELITA%20BANGSA!5e0!3m2!1sid!2sid!4v1718520528825!5m2!1sid!2sid"
          ></iframe>
        </nav>
      </footer>
      <footer className="p-4 bg-gray-400 md:text-base text-lg text-center">
        <h1>vapehub.co</h1>
      </footer>
    </div>
  )
}

export default Footer