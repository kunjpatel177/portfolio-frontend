import { useEffect, useMemo, useState } from 'react';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import SectionHeading from '../common/SectionHeading.jsx';
import SkeletonLoader from '../common/SkeletonLoader.jsx';
import { githubService } from '../../services/api.js';
import './GitHubSection.css';

function GitHubSection() {
  const [profileData, setProfileData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const username = import.meta.env.VITE_GITHUB_USERNAME || 'kunjpatel177';

  useEffect(() => {
    if (!username) {
      setLoading(false);
      return undefined;
    }
    Promise.all([githubService.profile(username), githubService.repos(username)])
      .then(([profileResponse, repoResponse]) => {
        setProfileData(profileResponse.data);
        setRepos(repoResponse.data);
      })
      .catch(() => {
        setProfileData({ login: username, public_repos: 0, followers: 0, html_url: `https://github.com/${username}` });
        setRepos([]);
      })
      .finally(() => setLoading(false));
  }, [username]);

  const graph = useMemo(() => Array.from({ length: 60 }, (_, index) => (index * 7) % 5), []);

  return (
    <section className="section-shell github-section">
      <div className="container">
        <SectionHeading eyebrow="GitHub" title="Open source activity snapshot" text="Live GitHub API data with repository count, followers, latest repositories and a contribution-style activity graph." />
        {loading ? <SkeletonLoader rows={3} /> : !username ? (
          <article className="github-profile portfolio-card">
            <FaGithub />
            <h3>GitHub username not configured</h3>
            <p>Set <strong>VITE_GITHUB_USERNAME</strong> in the client environment to enable live profile, repository and activity data.</p>
          </article>
        ) : (
          <div className="github-grid">
            <article className="github-profile portfolio-card">
              <FaGithub />
              <h3>{profileData.login}</h3>
              <div className="github-stats">
                <span><strong>{profileData.public_repos}</strong> Repositories</span>
                <span><strong>{profileData.followers}</strong> Followers</span>
              </div>
              <a className="btn-portfolio" href={profileData.html_url} target="_blank" rel="noreferrer">View Profile</a>
            </article>
            <article className="github-repos portfolio-card">
              <h3>Latest Repositories</h3>
              {repos.map((repo) => (
                <a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer">
                  <strong>{repo.name}</strong>
                  <span>{repo.language || 'Repository'} · {repo.stargazers_count} stars</span>
                </a>
              ))}
            </article>
            {/* <article className="github-graph portfolio-card">
              <h3>Contribution Style Graph</h3>
              <div className="contribution-grid">
                {graph.map((level, index) => <span className={`level-${level}`} key={index} />)}
              </div>
            </article> */}
          </div>
        )}
      </div>
    </section>
  );
}

export default GitHubSection;
