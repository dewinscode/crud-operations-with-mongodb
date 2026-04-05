const mongoose=require("mongoose");
const Chat=require("./models/chat.js");
main().then(()=>{
    console.log("connection is sucessfull");
    
}).catch((err)=>{
    console.log(err);
    
});
async function main() {
   await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
};

let allChats=[
    {
        from:"rahul",
        to:"shivam",
        msg:"hello gang",
        created_at:new Date()
    },
    {
        from:"setu",
        to:"adarsh",
        msg:"motu",
        created_at:new Date()
    },
      {
        from:"suraj",
        to:"mohit",
        msg:"hallabol",
        created_at:new Date()
    },
      {
        from:"shivam",
        to:"tushar",
        msg:"lets go outside ",
        created_at:new Date()
    },
      {
        from:"nikita",
        to:"yuvraj",
        msg:"baby",
        created_at:new Date()
    },
];
Chat.insertMany(allChats);