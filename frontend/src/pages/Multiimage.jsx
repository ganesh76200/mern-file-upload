import React, { useEffect, useState } from 'react'
import axios from "axios"

const Multiimage = () => {
    const [name, setName] = useState("kate")
    const [Documents, setDocuments] = useState()
    const [users, setUsers] = useState([])

    const userInstance = axios.create({
        baseURL: "http://localhost:5000"
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(Documents);
        const fd = new FormData()
        fd.append("name", name)
        for (let d of Documents) {
            fd.append("doc", d)
        }
        // for (const x of fd.entries()) {
        //     console.log(x);
        // }

        const { data } = await userInstance.post("/user/add-to-gallery", fd)
        console.log(data);
    }
    const getAllUsers = async e => {
        const { data: { result } } = await userInstance.get("/user/fetch")
        setUsers(result)
        console.log("result", result);
    }
    useEffect(() => {
        getAllUsers()
    }, [])

    return <>
        <pre>
            {JSON.stringify(Documents, null, 2)}
        </pre>
        <form onSubmit={handleSubmit}>
            <div className="container mt-4">
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className='form-control'
                    placeholder='Enter Name'
                />
                <br />

                <input
                    type="file"
                    multiple
                    onChange={e => setDocuments(e.target.files)}
                    className='form-control'
                    placeholder='Pelase Choose Docs'
                />
                <br />
                <button type='submit' className='btn btn-primary form-control'>Add Docs</button>
            </div>
        </form>
        <div className="container mt-5">
            {
                users.map(item => <div className='card'>
                    <div className='card-body'>
                        <h1>{item.name}</h1>
                        {
                            item.docs.map(url => <img
                                src={`http://localhost:5000/${url}`}
                                height={100}
                                className="img-fluid"
                                alt=''
                            />)
                        }
                    </div>

                </div>)
            }

        </div>
    </>
}

export default Multiimage