import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

const FormUpload = () => {
    const [printDocs, setPrintDocs] = useState([])
    const [name, setName] = useState("kate")
    const [documents, setDocuments] = useState({
        adhar: "",
        tc: "",
        dob: ""
    })
    const userInstance = axios.create({
        baseURL: "http://localhost:5000"
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        const fd = new FormData()
        fd.append("name", name)
        fd.append("adhar", documents.adhar[0])
        fd.append("tc", documents.tc[0])
        fd.append("dob", documents.dob[0])

        const { data } = await userInstance.post("/doc/add", fd)
        console.log("data", data);
    }
    const getDocuments = async () => {
        const { data } = await userInstance.get("/doc/")
        setPrintDocs(data.result)
        console.log("result", data.result);
    }
    useEffect(() => {
        getDocuments()
    }, [])
    return <>
        <div className="container">
            <div class="card">
                <div class="card-body">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                value={name}
                                onChange={e => setName(e.target.value)}
                                className='form-control' type="text" name="" id="" />
                        </div>
                        <div>
                            <label htmlFor="adhar">Adhar</label>
                            <input
                                //  value={name}
                                onChange={e => setDocuments({ ...documents, adhar: e.target.files })}
                                className='form-control' type="file" name="" id="" />
                        </div>
                        <div>
                            <label htmlFor="tc">Tc</label>
                            <input
                                onChange={e => setDocuments({ ...documents, tc: e.target.files })}
                                className='form-control' type="file" name="" id="" />
                        </div>
                        <div>
                            <label htmlFor="dob">Birth Certificate</label>
                            <input
                                onChange={e => setDocuments({ ...documents, dob: e.target.files })}
                                className='form-control' type="file" name="" id="" />
                        </div>
                        <br />
                        <button type="submit" class="btn btn-primary form-control">Submit</button>
                    </form>
                </div>
            </div>
            {
                printDocs.map(item => <div key={item._id} class="card mt-3">
                    <div class="card-body">
                        <img height={100} width={"100px"} src={`http://localhost:5000/${item.userAdhar}`} alt="" />
                        <img height={100} width={"100px"} src={`http://localhost:5000/${item.userDob}`} alt="" />
                        <img height={100} width={"100px"} src={`http://localhost:5000/${item.userTc}`} alt="" />
                    </div>
                    <div class="card-footer">footer</div>
                </div>)
            }
        </div>


    </>

}

export default FormUpload