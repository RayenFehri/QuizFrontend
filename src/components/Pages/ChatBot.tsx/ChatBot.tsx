import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import axios from 'axios';


const ChatBot = () => {
    const [formData, setFormData] = useState({
        file:null as File | null,
        message:'',
        questionType:'',
    });
    const [messages, setMessages] = useState<string[]>([]);
    const [aiMessages, setAiMessages] = useState<string[]>([]);
    const handleChange =  (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>)=> {
        const { name, value, type } = e.target;
        if (type === 'file'){
            const inputElement = e.target as HTMLInputElement;
            const file = inputElement.files && inputElement.files[0];
            if(file){
                setFormData({...formData, [name]: file });
            }
        } else {
            setFormData({...formData, [name]: value});
        }
    };
    const handleSubmit = async (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('message', formData.message);
            formDataToSend.append('questionType',formData.questionType);
            if(formData.file){
                formDataToSend.append('file',formData.file);
            }

            const response = await axios.post('http://localhost:3000/ai', formDataToSend);
            console.log(response.data);
            setMessages([...messages, formData.message]);
            setFormData({ ...formData, message: '' });
            setPlaceholder('Type your message...');
            setAiMessages([...aiMessages, response.data.aiResponse.aiMessage]);

        } catch (error) {
            console.error('Error:', error);
        }
    };
    const [placeholder, setPlaceholder] = useState('Type your message...');
    const handleMessageInput = (e: React.ChangeEvent<HTMLDivElement>) => {
        const newMessage = e.currentTarget.innerText.trim();
        setFormData({ ...formData, message: newMessage });
        if (!newMessage) {
            setPlaceholder('Type your message...');
        } else {
            setPlaceholder('');
        }
    };

    const handleFocus = () => {
        if (placeholder === 'Type your message...') {
            setPlaceholder('');
        }
    };

    const handleBlur = () => {
        if (!formData.message.trim()) {
            setPlaceholder('Type your message...');
        }
    };

    return (
        <>
            <div className="content">
                <div className="chat d-flex phoenix-offcanvas-container pt-1 mt-n1 mb-9 ">
                <div className="chat-content tab-content flex-1">
                    <div
                    className="tab-pane h-100 fade active show"
                    id="tab-thread-1"
                    role="tabpanel"
                    aria-labelledby="tab-thread-1"
                    >
                    <div className="card flex-1 h-100 phoenix-offcanvas-container">
                        <div className="card-header p-3 p-md-4 d-flex flex-between-center">
                        <div className="d-flex align-items-center">
                            <button
                            className="btn ps-0 pe-2 text-body-tertiary d-sm-none"
                            data-phoenix-toggle="offcanvas"
                            data-phoenix-target="#chat-sidebar"
                            >
                            <span className="fa-solid fa-chevron-left" />
                            </button>
                            <div className="d-flex flex-column flex-md-row align-items-md-center">
                            <button
                                className="btn fs-7 fw-semibold text-body-emphasis d-flex align-items-center p-0 me-3 text-start"
                                data-phoenix-toggle="offcanvas"
                                data-phoenix-target="#thread-details-0"
                            >
                                <span className="line-clamp-1">Quizo Bot</span>
                            </button>
                            <p className="fs-9 mb-0 me-2">
                                {" "}
                                <span className="fa-solid fa-circle text-success fs-11 me-2" />
                                Active now
                            </p>
                            </div>
                        </div>
                        
                        </div>

                        <div className="card-body p-3 p-sm-4 scrollbar">
                        {messages.map((message, index) => (
                            <React.Fragment key={index}>
                                {/* User message */}
                                <div className="d-flex chat-message">
                                    <div className="d-flex mb-2 justify-content-end flex-1">
                                        <div className="w-100 w-xxl-75">
                                            <div className="d-flex flex-end-center hover-actions-trigger">
                                                <div className="chat-message-content me-2">
                                                    <div className="mb-1 sent-message-content bg-primary rounded-2 p-3 text-white" data-bs-theme="light">
                                                        <p className="mb-0">{message}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-end">
                                            <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold">{new Date().toLocaleString()}</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* AI response */}
                                {aiMessages[index] &&(
                                    <div className="d-flex chat-message" >
                                        <div className="d-flex mb-2 flex-1">
                                            <div className="w-100 w-xxl-75">
                                                <div className="d-flex hover-actions-trigger">
                                                    <div className="avatar avatar-m me-3 flex-shrink-0">
                                                        <img className="rounded-circle" src="../assets/img/ai-avatar.png" alt="" />
                                                    </div>
                                                    <div className="chat-message-content received me-2">
                                                        <div className="mb-1 received-message-content border rounded-2 p-3">
                                                            <p className="mb-0">{aiMessages[index]}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold ms-10">{new Date().toLocaleString()}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                        </div>
                        <div className="card-footer">
                            <form onSubmit={handleSubmit}>
                               
                                <div
                                
                                className="chat-textarea outline-none scrollbar mb-1"
                                contentEditable={true}
                                onInput={handleMessageInput}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                style={{ opacity: placeholder ? 0.7 : 1 }}
                            >
                                {placeholder}
                            </div>
                                
                                
                                <div className="col-sm-6 col-md-2">
                                        <div className="form-floating">
                                            <select className="form-select" id="floatingSelectAssignees" 
                                                name='questionType' 
                                                value={formData.questionType} 
                                                onChange={handleChange}>
                                                    <option selected value="pdf">pdf</option>
                                                    <option value="general">general</option>
                                            </select>
                                            <label htmlFor="floatingSelectAssignees">Select Question Type</label>
                                        </div>
                                </div>

                                <div className="d-flex justify-content-between align-items-end">                                 
                                    <input  className="d-none" type="file"accept="file/*"id="chatAttachment-0"name='file'onChange={handleChange}/>
                                    <label className="btn btn-link py-0 px-2 text-body fs-9" htmlFor="chatAttachment-0" > {" "}
                                        <span className="fa-solid fa-paperclip" />
                                    </label>
                                    <div>
                                        <button  className="btn btn-primary fs-10" type="submit">
                                            <span className="fa-solid fa-paper-plane ms-1" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>  
                </div>
                <div
                    className="phoenix-offcanvas-backdrop d-lg-none"
                    data-phoenix-backdrop="data-phoenix-backdrop"
                    style={{ top: 0 }}
                />
                
                </div>

            </div>
    


        </>
        )
}
export default ChatBot;