import { Signal } from "@preact/signals";

interface Props {
  message: Signal<string | null>;
}

export default function ErrorNotification({ message }: Props) {
  const classes = [
    "px-4",
    "py-2",
    "flex",
    "flex-row",
    "items-center",
    "justify-between",
    "border",
    "rounded-md",
    "bg-red-100",
    "border-red-400",
    "text-red-700",
    "dark:bg-red-500",
    "dark:border-red-700",
    "dark:text-white",
  ];

  return (
    <div class="my-4">
      <div class={classes.join(" ")}>
        <span class="block">{message.value}</span>
        <span onClick={() => message.value = null}>
          <svg
            class="fill-current h-6 w-6 text-red-700 dark:text-white"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    </div>
  );
}
