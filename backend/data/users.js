import bcrypt from 'bcryptjs'

const users= [{
    name:'Admin user',
    email:'admin@example.com',
    password:bcrypt.hashSync('123456',10),
    isAdmin:true
},
{
    name:'test1',
    email:'test1@example.com',
    password:bcrypt.hashSync('123456',10),

},
{
    name:'test2',
    email:'test2@example.com',
    password:bcrypt.hashSync('123456',10),
    
},
]
export default users