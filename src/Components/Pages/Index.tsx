import { MarkdownSection } from '../MarkdownSection';
import { SimpleCodeSection } from '../SimpleCodeSection';
import './Index.css';

const markdown = `
# Hello!

~~~go
func Hello() {
    return 5;
}
~~~
`;

function Index() {
    return (<>
        <div className='main-content'>
            <div className='inner-content'>
                <MarkdownSection>
                    {markdown}
                </MarkdownSection>

                <SimpleCodeSection>
                    nya
                </SimpleCodeSection>
            </div>
        </div>
    </>)
}

export {
    Index
}