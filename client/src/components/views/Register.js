import React from 'react'
import '../../assets/css/fonts.css';

function Register() {
    return (
    <div className="text-center" style={{paddingTop: '4rem'}}>
        <div className="fontStyle" style={{ fontSize: '4rem'}}>
            Sign Up
        </div>
        <br />
        <div className="flex justify-center flex-wrap">
            <div className="w-full max-w-xs items-center">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm mb-2" style={{float: 'left'}}>
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm mb-2" style={{float: 'left'}}>
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm mb-2" style={{float: 'left'}}>
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" />
                        <label className="block text-gray-700 text-sm mb-2" style={{float: 'left'}}>
                            Password Check
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" />
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Register
