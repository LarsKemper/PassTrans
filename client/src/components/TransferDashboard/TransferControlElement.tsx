import React from "react";
import { ControlElementType } from "../../shared/enums/controlElementType.enum";

interface Props {
  type: ControlElementType;
  title: string;
  desc: string;
  selected: boolean;
}

function TransferControlElement(props: Props) {
  return (
    <div
      className={`${
        props.type === ControlElementType.ACTIV
          ? "hover:border-green-500 hover:bg-green-500"
          : props.type === ControlElementType.BLOCK
          ? "hover:border-orange-500 hover:bg-orange-500"
          : props.type === ControlElementType.DELETE
          ? "hover:border-red-500 hover:bg-red-500"
          : false
      } ${
        props.type === ControlElementType.ACTIV && props.selected
          ? "border-green-500 bg-green-500 bg-opacity-10"
          : props.type === ControlElementType.BLOCK && props.selected
          ? "border-orange-500 bg-orange-500 bg-opacity-10"
          : props.type === ControlElementType.DELETE && props.selected
          ? "border-red-500 bg-red-500 bg-opacity-10"
          : false
      } group cursor-pointer hover:bg-opacity-10 relative flex flex-col justify-between p-8 duration-300 bg-opacity-0 border rounded-xl sm:items-center`}
    >
      {props.selected && (
        <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
          <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-deep-purple-accent-400">
            Currently Selected
          </div>
        </div>
      )}
      <div className="text-center">
        <div className="text-lg font-semibold flex items-center justify-center">
          {props.type === ControlElementType.ACTIV ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${
                props.selected && "text-green-500"
              } h-10 w-10 duration-300 text-white group-hover:text-green-500`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : props.type === ControlElementType.BLOCK ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${
                props.selected && "text-orange-500"
              } h-10 w-10 duration-300 text-white group-hover:text-orange-500`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
              />
            </svg>
          ) : props.type === ControlElementType.DELETE ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${
                props.selected && "text-red-500"
              } h-10 w-10 duration-300 text-white group-hover:text-red-500`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            false
          )}
        </div>
        <div className="flex items-center justify-center mt-2">
          <div className="mr-1 text-3xl font-medium text-white">
            {props.title}
          </div>
        </div>
        <div className="mt-2 space-y-3">
          <div className="text-gray-400 text-center">{props.desc}</div>
        </div>
      </div>
    </div>
  );
}

export default TransferControlElement;
