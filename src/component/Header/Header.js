import React from 'react';

const Header = () => {
    return (
        <div class="navbar bg-yellow-500 px-8 fixed top-0 ">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li ><a>Home</a></li>
                        <li tabindex="0">
                            <a>
                                About

                            </a>
                        </li>
                        <li><a>Categories</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <a class="btn btn-ghost text-black font-bold normal-case text-xl">daisyUI</a>
            </div>
            {/* <div class="navbar-center hidden lg:flex">

            </div> */}
            <div class="navbar-end">
                <ul class="menu menu-horizontal px-1 text-black">
                    <li ><a>Home</a></li>
                    <li tabindex="0">
                        <a>
                            About

                        </a>
                    </li>
                    <li><a>Categories</a></li>
                    <li><a>Contact</a></li>
                </ul>
                <a class="btn btn-sm rounded-full">Get started</a>
            </div>
        </div>
    );
};

export default Header;