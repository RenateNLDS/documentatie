import React from 'react';
import clsx from 'clsx';
import style from './CoreTeam.module.css';

export const Peter = () => (
  <img
    alt="Avatar van Peter"
    className={clsx(style['core-team__avatar'])}
    src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/kernteam_peter.svg"
    title="Peter - Projectleider"
  />
);

export const Robbert = () => (
  <img
    alt="Avatar van Robbert"
    className={clsx(style['core-team__avatar'])}
    src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/kernteam_robbert.svg"
    title="Robbert - Techlead"
  />
);

export const Yolijn = () => (
  <img
    alt="Avatar van Yolijn"
    className={clsx(style['core-team__avatar'])}
    src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/kernteam_yolijn.svg"
    title="Yolijn - Developer"
  />
);

export const Jeffrey = () => (
  <img
    alt="Avatar van Jeffrey"
    className={clsx(style['core-team__avatar'])}
    src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/kernteam_jeffrey.svg"
    title="Jeffrey - UX Designer"
  />
);

export const Andrea = () => (
  <img
    alt="Avatar van Andrea"
    className={clsx(style['core-team__avatar'])}
    src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/kernteam_andrea.svg"
    title="Andrea - Developer"
  />
);

export const Hidde = () => (
  <img
    alt="Avatar van Hidde"
    className={clsx(style['core-team__avatar'])}
    src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/kernteam_hidde.svg"
    title="Hidde - Developer"
  />
);

export const CoreTeam = () => {
  return (
    <div className={clsx(style['core-team'])}>
      <Peter />
      <Robbert />
      <Yolijn />
      <Jeffrey />
      <Andrea />
      <Hidde />
    </div>
  );
};

export default CoreTeam;
