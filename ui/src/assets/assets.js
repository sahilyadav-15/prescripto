/* eslint-disable no-unused-vars */
import appointment_img from "./appointment_img.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
// import profile_pic from "./profile_pic.png";
import profile_pic from "./profile_pic_sanjay.jpg";
import contact_image from "./contact_image.png";
import about_image from "./about_image.png";
import logo from "./logo.svg";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";
import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import doc3 from "./doc3.png";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";
import doc9 from "./doc9.png";
import doc10 from "./doc10.png";
import doc11 from "./doc11.png";
import doc12 from "./doc12.png";
import doc13 from "./doc13.png";
import doc14 from "./doc14.png";
import doc15 from "./doc15.png";
import Dermatologist from "./Dermatologist.svg";
import Gastroenterologist from "./Gastroenterologist.svg";
import General_physician from "./General_physician.svg";
import Gynecologist from "./Gynecologist.svg";
import Neurologist from "./Neurologist.svg";
import Pediatricians from "./Pediatricians.svg";

export const assets = {
  appointment_img,
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};

export const specialityData = [
  {
    speciality: "General physician",
    dept_id: 0,
    image: General_physician,
  },
  {
    speciality: "Gynecologist",
    dept_id: 1,
    image: Gynecologist,
  },
  {
    speciality: "Dermatologist",
    dept_id: 2,
    image: Dermatologist,
  },
  {
    speciality: "Pediatricians",
    dept_id: 3,
    image: Pediatricians,
  },
  {
    speciality: "Neurologist",
    dept_id: 4,
    image: Neurologist,
  },
  {
    speciality: "Gastroenterologist",
    dept_id: 5,
    image: Gastroenterologist,
  },
];

export const doctors = [
  {
    _id: "doc1",
    dept_id: 0,
    name: "Dr. Richard James",
    image: doc1,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Richard James is a compassionate general physician with 4 years of experience in comprehensive healthcare. He specializes in preventive medicine and chronic disease management, helping patients achieve optimal health through lifestyle modifications and evidence-based treatments. Dr. James believes in building strong doctor-patient relationships and takes time to listen to his patients' concerns.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc2",
    dept_id: 1,
    name: "Dr. Emily Larson",
    image: doc2,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Emily Larson is a dedicated gynecologist with 3 years of specialized experience in women's reproductive health. She provides comprehensive gynecological care including prenatal care, family planning, and treatment of gynecological disorders. Dr. Larson is known for her empathetic approach and commitment to patient education and empowerment.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc3",
    dept_id: 2,
    name: "Dr. Sarah Patel",
    image: doc3,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Sarah Patel is an enthusiastic dermatologist passionate about helping patients with skin, hair, and nail conditions. With 1 year of experience, she stays updated with the latest dermatological treatments and techniques. Dr. Patel specializes in both medical dermatology and cosmetic procedures, ensuring optimal skin health and confidence for her patients.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc4",
    dept_id: 3,
    name: "Dr. Christopher Lee",
    image: doc4,
    speciality: "Pediatricians",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Christopher Lee is a caring pediatrician with 2 years of experience in child healthcare. He provides comprehensive pediatric care from infancy through adolescence, including vaccinations, developmental screening, and treatment of acute and chronic conditions. Dr. Lee has a gentle approach that helps children feel comfortable and builds trust with families.",
    fees: 40,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc5",
    dept_id: 4,
    name: "Dr. Jennifer Garcia",
    image: doc5,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Jennifer Garcia is an accomplished neurologist with 4 years of experience in diagnosing and treating neurological disorders. She specializes in headaches, neurological infections, and movement disorders. Dr. Garcia combines clinical expertise with a patient-centered approach, ensuring comprehensive evaluation and personalized treatment plans.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc6",
    dept_id: 4,
    name: "Dr. Andrew Williams",
    image: doc6,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Andrew Williams is an experienced neurologist with 4 years of specialized training in neurological diseases. He focuses on epilepsy management, neurovascular disorders, and neurological rehabilitation. Dr. Williams is committed to staying current with advanced neuroimaging and treatment modalities to provide cutting-edge care.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc7",
    dept_id: 0,
    name: "Dr. Christopher Davis",
    image: doc7,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Christopher Davis is a dedicated general physician with 4 years of experience in primary healthcare. He excels in managing acute illnesses and chronic diseases while emphasizing preventive care and wellness. Dr. Davis takes a holistic approach to medicine, considering the physical, emotional, and social aspects of health.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc8",
    dept_id: 1,
    name: "Dr. Timothy White",
    image: doc8,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Timothy White is a skilled gynecologist with 3 years of experience in women's health and reproductive medicine. He specializes in management of gynecological emergencies, infertility, and menopausal health. Dr. White believes in shared decision-making and provides comprehensive counseling to help women make informed choices.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc9",
    dept_id: 2,
    name: "Dr. Ava Mitchell",
    image: doc9,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Ava Mitchell is a passionate dermatologist beginning her exciting career in skin health. Despite her 1 year of experience, she brings fresh perspectives and enthusiasm to dermatological practice. Dr. Mitchell focuses on acne management, eczema treatment, and aesthetic dermatology with a commitment to patient satisfaction.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc10",
    dept_id: 3,
    name: "Dr. Jeffrey King",
    image: doc10,
    speciality: "Pediatricians",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Jeffrey King is a compassionate pediatrician with 2 years of experience in child and adolescent medicine. He specializes in common childhood illnesses, growth monitoring, and behavioral health. Dr. King is known for his ability to communicate effectively with both children and parents, creating a welcoming environment.",
    fees: 40,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc11",
    dept_id: 4,
    name: "Dr. Zoe Kelly",
    image: doc11,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Zoe Kelly is a talented neurologist with 4 years of experience in complex neurological cases. She specializes in stroke prevention, dementia management, and neurological rehabilitation. Dr. Kelly combines scientific knowledge with empathy, helping patients understand their conditions and develop effective management strategies.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc12",
    dept_id: 5,
    name: "Dr. Patrick Harris",
    image: doc12,
    speciality: "Gastroenterologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Patrick Harris is an experienced gastroenterologist with 4 years of expertise in digestive health. He specializes in endoscopy, management of inflammatory bowel disease, and liver disorders. Dr. Harris is dedicated to improving digestive health through accurate diagnosis and evidence-based treatment protocols.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc13",
    dept_id: 0,
    name: "Dr. Chloe Evans",
    image: doc13,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Chloe Evans is a seasoned general physician with 4 years of comprehensive medical practice. She excels in diagnostic reasoning and managing multimorbidity in complex patients. Dr. Evans emphasizes patient education and preventive health strategies while maintaining a warm and accessible approach to healthcare.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc14",
    dept_id: 1,
    name: "Dr. Ryan Martinez",
    image: doc14,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Ryan Martinez is a modern gynecologist with 3 years of experience in reproductive medicine. He specializes in contraceptive counseling, fertility evaluation, and minimally invasive gynecological surgery. Dr. Martinez is committed to breaking barriers in women's health and providing compassionate, judgment-free care.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc15",
    dept_id: 2,
    name: "Dr. Amelia Hill",
    image: doc15,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Amelia Hill is an enthusiastic young dermatologist with 1 year of experience bringing fresh approaches to skin care. She specializes in treatment of psoriasis, vitiligo, and various dermatological allergies. Dr. Hill stays current with latest dermatological research and provides evidence-based treatment recommendations.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
];

export const deptBtnData = [
  { id: 0, name: "General physician" },
  { id: 1, name: "Gynecologist" },
  { id: 2, name: "Dermatologist" },
  { id: 3, name: "Pediatricians" },
  { id: 4, name: "Neurologist" },
  { id: 5, name: "Gastroenterologist" },
];
