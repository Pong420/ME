import React from 'react';
import { Link } from 'gatsby';
import { MeteorsPage } from '../MeteorsPage';
import Github from '../../assets/github.svg';
import Telegram from '../../assets/telegram.svg';

const style = { marginTop: 20 };
const text = ['i am', 'Pong', 'a web developer'];

export function Home() {
  return (
    <>
      <MeteorsPage className="home" text={text}>
        <div className="icons">
          <a
            href="https://github.com/Pong420"
            style={style}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="github" />
          </a>
          <a
            href="https://t.me/Pong420"
            style={style}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Telegram className="telegram" />
          </a>
        </div>
      </MeteorsPage>
      <div className="view-projects">
        <Link to="/projects">Projects</Link>
      </div>
    </>
  );
}
