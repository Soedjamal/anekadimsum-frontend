const MessageCS = ({ productName }: { productName: string }) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "628886947507";
    const message = encodeURIComponent(
      `Assalamualaikum, ${productName} e tasih mboten?`,
    );
    const waLink = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(waLink, "_blank");
  };

  return (
    <>
      <div
        className="flex w-full flex-col  bg-neutral-50 border-[1px] rounded-t-lg 
        rounded-br-lg p-8 pb-4 gap-4 z-10 items-end"
      >
        <h4>Hubungi Customer Service?</h4>

        <h4
          onClick={handleWhatsAppClick}
          className="py-2 w-fit rounded-lg border-2 border-green-500 px-6 bg-green-200"
        >
          YA
        </h4>
      </div>
    </>
  );
};

export default MessageCS;
