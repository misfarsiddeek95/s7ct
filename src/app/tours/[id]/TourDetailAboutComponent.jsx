import React from "react";

export default function TourDetailAboutComponent(props) {
  return (
    <li className="inline-flex items-center me-5 mt-5">
      <props.icon className="size-6 stroke-[1.5] text-red-500"></props.icon>

      <div className="ms-3">
        <p className="font-medium">{props.name}</p>
        <span className="text-slate-400 font-medium text-sm">{props.title}</span>
      </div>
    </li>
  )
}