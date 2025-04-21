"use client";

import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import { Button } from "@/components/ui/button";

const pageSizeOptions = [6, 9, 12, 15];

export default function PageSizeSelector({ value, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-36 justify-between border border-gray-400"
        >
          {value} por página
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-36">
        <Command>
          <CommandGroup>
            {pageSizeOptions.map((option) => (
              <CommandItem
                key={option}
                onSelect={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className="cursor-pointer"
              >
                {option} por página
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
