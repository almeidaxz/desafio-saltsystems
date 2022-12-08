import { useState } from "react";

export default function Login() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSignIn = (e) => {
        e.preventDefault();
    }

    return (
        <div
            className="w-full flex items-center justify-center"
        >
            <form className="w-[15%] flex flex-col gap-4">
                <label className="flex flex-col">
                    Nome
                    <input
                        onChange={handleChange}
                        type="text"
                        placeholder="Nome"
                        name="name"
                        value={formData.name}
                    />
                </label>
                <label className="flex flex-col">
                    E-mail
                    <input
                        onChange={handleChange}
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        value={formData.email}
                    />
                </label>
                <button
                    onClick={handleSignIn}
                    className="px-6 py-1 bg-white rounded-lg"
                >
                    Entrar
                </button>
            </form>
        </div>
    )
}