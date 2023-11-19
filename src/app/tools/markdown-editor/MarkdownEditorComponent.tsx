"use client";

import { useEffect, useState } from "react";
import TextArea from "@/app/components/common/TextArea";
import FormattedMarkdownOutput from "@/app/components/common/FormattedMarkdownOutput";
import { User } from "@clerk/backend";
import { saveHistory } from "@/utils/clientUtils";
import { ToolType } from "@prisma/client";
import useDebounce from "@/app/hooks/useDebounce";

export default function JsonValidatorComponent({
  user,
  isProUser,
}: {
  user: User | null;
  isProUser: boolean;
}) {
  const [output, setOutput] = useState("");
  // const debouncedOutput = useDebounce(output, 1000);
  // useEffect(() => {
  //   if (debouncedOutput && debouncedOutput !== initialInput) {
  //     void saveHistory({
  //       user,
  //       isProUser,
  //       toolType: ToolType.MarkdownEditor,
  //       onError: () => {},
  //       metadata: {
  //         output,
  //       },
  //     });
  //   }
  // }, [debouncedOutput]);
  
  return (
    <div className="w-full h-full flex gap-4">
      <TextArea
        initialInput={initialInput}
        onInputChange={(input) => setOutput(input)}
      />
      <FormattedMarkdownOutput input={output} />
    </div>
  );
}

const initialInput =
`# Header
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6
*Italic*      _Italic_
**Emphasis**  __Emphasis__
***Emphasis Italic*** ___Emphasis Italic___
Superscript: X<sub>2</sub>，Subscript: O<sup>2</sup>
> Blockquotes
Paragraphs and Line Breaks`