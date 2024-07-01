import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div className='min-h-screen w-64 bg-slate-800 text-white flex flex-col'>
        <div className='flex items-center justify-center h-20 bg-gray-300 text-gray-800 rounded-md m-4'>
          <span className='text-xl font-semibold tracking-wide'>Logo</span>
        </div>

        <nav className='mt-10'>
          <ul className='space-y-2'>
            <li>
              <Link
                to='/'
                className='block px-4 py-2 text-gray-200 rounded-md mx-4 hover:bg-gray-600 hover:text-white no-underline font-medium tracking-wide'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/vista1'
                className='block px-4 py-2 text-gray-200 rounded-md mx-4 hover:bg-gray-600 hover:text-white no-underline font-medium tracking-wide'
              >
                Vista 1
              </Link>
            </li>
            <li>
              <Link
                to='/vista2'
                className='block px-4 py-2 text-gray-200 rounded-md mx-4 hover:bg-gray-600 hover:text-white no-underline font-medium tracking-wide'
              >
                Vista 2
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
