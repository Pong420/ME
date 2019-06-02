import React from 'react';
import { Link } from 'gatsby';
import { MeteorsPage } from '../MeteorsPage';
import { Github } from '../Icons/Github';
import { Telegram } from '../Icons/Telegram';

const style = { marginTop: 20 };
const text = ['i am', 'Pong', 'a web developer'];

export function Home() {
  return (
    <>
      <MeteorsPage className="home" text={text}>
        <div className="icons">
          <a href="https://github.com/Pong420" style={style} target="_blank">
            <Github width={35} />
          </a>
          <a href="https://t.me/Pong420" style={style} target="_blank">
            <Telegram width={39.5} />
          </a>
        </div>
      </MeteorsPage>
      <div className="view-projects">
        <Link to="/projects">Projects</Link>
      </div>
    </>
  );
}
