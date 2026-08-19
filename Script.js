function commander(service) {
     const message = "Bonjour, je veux commander " + service + ".";
     const whatsapp = "https://wa.m/22360800945?text=" + encodeURIComponent(message);

     window.open(whatsapp, "_blank");
}