import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header className="header">
            <div className="header__inner">
                <h1>
                    <Link to="/">
                    <span className="blind">왓챠피디아</span></Link></h1>
                <ul className="category">
                    <li>
                        <Link to="/">영화</Link>
                    </li>
                    <li>
                        <Link to="/">TV 프로그램</Link>
                    </li>
                    <li>
                        <Link to="/">책</Link>
                    </li>
                </ul>
                <div className="box_search">
                    <form>
                        <label htmlFor="" className="blind">검색</label>
                        <input type="search" placeholder="작품 제목, 배우, 감독을 검색해보세요."  required="required"/>
                    </form>
                </div>
                <button type="button" className="btn btn__login">로그인</button>
                <button type="button" className="btn btn__join">회원가입</button>
            </div>
        </header>
    )
}

export default Header
