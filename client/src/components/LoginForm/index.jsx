import { useState } from "react";
import api from '../../services/api';
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSignIn = async (e) => {
        e.preventDefault();

        try {
            const { data } = await api.post('/login', formData);

            console.log(data);

            localStorage.setItem('id', data.id);
            localStorage.setItem('name', data.name);
            localStorage.setItem('email', data.email);

            navigate('/home');
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
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
    )
}