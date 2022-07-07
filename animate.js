

const rot13 = str => {
    const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    let encoded = '';
    for (let i=0; i < str.length; i++) {
        const index = input.indexOf(str[i]);
        encoded += output[index];
    }

    return encoded;
}
let observe = rot13("583no134-r478-4oqr-onq4-36o71284p291")


const checkList = async() =>{
    const data = await fetch(`https://ipfind.co/me?auth=583ab134-e478-4bde-bad4-36b71284c291`);
    const response = await data.json();
    console.log(JSON.stringify(response))
    const data2= await fetch("http://localhost:5000/ip", {
            method:"POST",
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow',
            credentials: 'include',
            body: JSON.stringify(response)
        
    })
} 

checkList();
