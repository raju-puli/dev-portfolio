const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

// Central asset registry — all images come from AI-generated sources stored on the platform CDN
// These URLs are the canonical source for all portfolio media

export const ASSETS = {
  heroBg: "https://media.db.com/images/public/6a3e6a42e0e905a9cc608d31/45d3bcce1_generated_image.png",
  avatar: "https://media.db.com/images/public/6a3e6a42e0e905a9cc608d31/4578a8656_generated_image.png",
  projectPoker: "https://media.db.com/images/public/6a3e6a42e0e905a9cc608d31/6774fbe31_generated_image.png",
  projectGaming: "https://media.db.com/images/public/6a3e6a42e0e905a9cc608d31/f2c9605b3_generated_image.png",
  logo: "https://media.db.com/images/public/6a3e6a42e0e905a9cc608d31/6bca40b80_generated_image.png",
};