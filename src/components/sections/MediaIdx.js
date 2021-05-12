import media1 from "../../assets/tea.jpg";
import media2 from "../../assets/connect4.JPG";
import media3 from "../../assets/fortunext1.JPG";
import media4 from "../../assets/squad.jpg";
import media5 from "../../assets/ybdcwebsite.jpg";

export const media = [media1, media2, media3, media4, media5];
export const mediaByIndex = (index) => media[index % media.length];
