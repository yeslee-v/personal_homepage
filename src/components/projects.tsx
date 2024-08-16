"use client";

import React from "react";

import Link from "next/link";
import styles from "../styles/projects.module.css";

import { projectsDetail } from "../data/projects.data";

const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
      <div className={styles.project}>
        {projectsDetail.map((project) => (
          <Link prefetch href={`projects/${project.id}`}>
            <section key={project.id} className={styles.projectBox}>
              <img
                alt={project.title}
                src={`/images/${project.title}.png`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
              <div>
                <h4>{project.title}</h4>
                <h6>{project.description}</h6>
              </div>
            </section>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
