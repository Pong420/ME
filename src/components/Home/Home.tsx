import React from 'react';
import { Link } from 'gatsby';
import { MeteorsPage } from '../MeteorsPage';
import { Github } from '../Icons/Github';
import { Telegram } from '../Icons/Telegram';

export function Home() {
  return (
    <>
      <MeteorsPage className="home" text={['i am', 'Pong', 'a web developer']}>
        <div className="icons">
          <a
            href="https://github.com/Pong420"
            style={{ marginTop: 20 }}
            target="_blank"
          >
            <Github width={35} />
          </a>
          <a
            href="https://t.me/Pong420"
            style={{ marginTop: 20 }}
            target="_blank"
          >
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
