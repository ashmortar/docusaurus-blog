import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--info button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('blog/')}>
              Blog
            </Link>
          </div>
        </div>
      </header>
      <section className={clsx('hero hero--dark', styles.heroBanner)}>
      <div class="container">
        <h1 class="hero__title">Work and Projects</h1>
        <div>
        </div>
      </div>
    </section>
      <main class="container">
      <div className={clsx("row", styles.cardSection)}>
        <div class="col">
          <div class="card">
            <div class="card__image">
              <img
                className={styles.cardImg}
                src="https://www.eyecuelab.com/images/black_logo.jpg"
                alt="Logo for EyeCue Lab"
                title="EyeCue Lab | Enterprise Software Development"
              />
            </div>
            <div class="card__body">
              <h4>EyeCueLab</h4>
              <small>
                I'm currently an Electron and React full stack developer at EyeCue Lab working on desktop software to process scientific research data
              </small>
            </div>
            <div class="card__footer">
              <button onClick={() => window.open('https://www.eyecuelab.com/')} class="button button--primary button--block">Open in New Tab</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card__image">
              <img
                className={styles.cardImg}
                src={useBaseUrl('img/nBody.gif')}
                alt="N-Body simulation animated gif"
                title="N-Body Simulation done with canvas"
              />
            </div>
            <div class="card__body">
              <h4>N-Body Universe Simulation</h4>
              <small>
                Uses canvas and the leapfrog strategy to calculate the n-body problem simulating stars and a supermassive black hole in a galaxy.
              </small>
            </div>
            <div class="card__footer">
              <button onClick={() => window.open('https://codepen.io/ashmortar/full/RwPNzEP')} class="button button--primary button--block">Open in New Tab</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card__image">
              <img
                className={styles.cardImg}
                src={useBaseUrl('/img/Soulless.png')}
                alt="Main Screen for Soulless, react native game"
                title="Main Screen for Soulless, a react native game"
              />
            </div>
            <div class="card__body">
              <h4>Soulless</h4>
              <small>
                A react native game where 2 players take competing roles to avert (or complete) a demonic possession.
              </small>
            </div>
            <div class="card__footer">
              <button onClick={() => window.open('https://github.com/ashmortar/Soulless')} class="button button--primary button--block">Open in New Tab</button>
            </div>
          </div>
        </div>
      </div>
      </main>
    </Layout>
  );
}

export default Home;
