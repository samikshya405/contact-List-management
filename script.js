const addbtn = document.querySelector('.add')
const name = document.querySelector('.name')
const phone = document.querySelector('.phone')
const address = document.querySelector('.address')
const cancel = document.querySelector('.cancel')
const modal = document.querySelector('.form')
const userName= document.querySelector('.userName')
const userPhone= document.querySelector('.userPhone')
const userEmail= document.querySelector('.userEmail')
const submit=document.querySelector('.submit')


const contactList=[]
addbtn.addEventListener('click',()=>{
    modal.classList.remove('hide-form')
   
    

})


cancel.addEventListener('click',()=>{
    userName.value=""
    userPhone.value=""
   userEmail.value=""
    
    modal.classList.add('hide-form')
})

submit.addEventListener('click',()=>{
    if(userName.value.trim()==''|| userPhone.value.trim()=='' || userEmail.value.trim()==''){
        alert('please enter all value')
        return;
    }
    let obj={}
    obj.name=userName.value
    obj.phone=userPhone.value
    obj.email = userEmail.value
    contactList.push(obj)
    displayContact()
    console.log(contactList)
    userName.value=""
    userPhone.value=""
   userEmail.value=""
    modal.classList.add('hide-form')


})

const displayContact=()=>{
    let eachContactRow=''
    contactList.forEach((item, index)=>{
        let eachContact=`
        <div class="info2">
                    <div class="btn1">${item.name}</div>
                    <div class="btn2">${item.phone}</div>
                    <div class="btn3">${item.email}</div>
                    <div class="btn4" onclick=editContact(${index})>
                    <i class="fa-solid fa-pen-to-square"></i>
                    </div>
                    <div class="btn5" onclick=deleteContact(${index})>
                    <i class="fa-solid fa-trash-can"></i>
                    </div>
                </div>
        `
        eachContactRow+=eachContact
    })
    const saved = document.querySelector('.saved')
    saved.innerHTML=eachContactRow

}

const deleteContact=(index)=>{
    contactList.splice(index,1)
    displayContact()
}

const editContact=(index)=>{
    console.log(contactList[index])
    modal.classList.remove('hide-form')
    userName.value=contactList[index].name
    userPhone.value=contactList[index].phone
    userEmail.value=contactList[index].email
    contactList.splice(index,1)
    // displayContact()
   
   



}
let fruit=["fruit","apple","cat","orange"]
console.log(fruit)
fruit.splice(0,1,'ball')
console.log(fruit)