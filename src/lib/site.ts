export const site = {
  name: "HatchGrow Poultry",
  tagline: "Hatching Quality. Growing Trust.",
  address: "2948 West Road, Chiredzi",
  phones: ["+263 78 625 5200", "+263 77 513 6717"],
  whatsappNumber: "263786255200",
  hours: "07:00 – 17:00",
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const telLink = (phone: string) => `tel:${phone.replace(/\s+/g, "")}`;
