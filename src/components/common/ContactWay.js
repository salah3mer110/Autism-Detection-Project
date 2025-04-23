function ContactWay({ contactIcon, children }) {
  return (
    <div className="flex items-center gap-3 mt-4">
      {contactIcon}
      <p className="text-[20px] font-semibold">{children}</p>
    </div>
  );
}

export default ContactWay;
