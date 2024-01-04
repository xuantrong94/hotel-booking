const Footer = () => {
  return (
    <footer className="bg-blue-800 py-6">
      <div className="container mx-auto flex items-center justify-between">
        <span className="text-2xl font-bold tracking-tight text-white">
          XT.Booking
        </span>
        <div className="flex gap-4 font-bold tracking-tight text-white">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
