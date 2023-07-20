// DAILY PROTEIN CODE SNIPPETS //

export const codeFetchApi = 
` // use to track signal and request to be aborted if necessary
  const controller = new AbortController()

  const fetchData = async () => {
    setIsPending(true)
    try {
      // fetch data
      const response = 
      await fetch(url, { signal: controller.signal })

      // throw error if the response is failed
      if(!response.ok){
          throw new Error(response.statusText)
      }
      // receive parsed json data
      const data = await response.json()

      setIsPending(false)
      setData(data)
      setError(null)

    } catch (error) {
      if(error.name === "AbortError"){
        setError("the fetch was aborted.")
      } else {
        setIsPending(false)
        setError("Could not fetch the data.")
      }
    }
  }
`

export const codeFirebase = 
`// Custom Hook to READ data from Firestore
useEffect(() => {

  // refer to 'profiles' collection in Firestore
  let ref = collection(db, 'profiles')

  // check data where 'uid' field matches current user's uid
  const q = query(ref, where("uid", "==", user.uid))

  // Read real-time data
  const unsub = onSnapshot(q, (snapshot) => {
      // retrieve data if snapshot is not empty
      if(!snapshot.empty){
          snapshot.forEach((doc) => {
              setProfile({...doc.data(), id: doc.id})
              setError(null)
          })
      } else {
          setError('Profile does not exist.')
      }
  }, (error) => {
      setError('Could not fetch the profiles data.')
  })

  return () => unsub()

}, [user.uid])

return { profile, error }
`

export const codeAuth = 
`export const AuthContext = createContext()

// return a new state based on the action type
export const authReducer = (state, action) => {
  switch(action.type){
    case 'LOGIN':
      return { ...state, user: action.payload }
    case 'LOGOUT':
      return { ...state, user: null }
    case 'AUTH_IS_READY':
      return { user: action.payload, authIsReady: true }
    default:
      return state
  }
}

// listen state changes and dispatch function
export const AuthContextProvider = ({ children }) => {
  // useReducer(reducer function , initial value)
  const [ state, dispatch ] = useReducer(authReducer, {
    user: null,
    authIsReady: false
  })
}
`

// REFINE CODE SNIPPETS //

export const codeServer = 
`

const express = require('express')
const { generateContent } = 
require('./controllers/openaiControllers')

// app setup
const app = express()
const PORT = 3000 || process.env.PORT

app.listen(PORT, () => 
console.log(\`listening request on port \${PORT}\`))

// middleware
app.use(express.json())
app.use(express.static('public'))

// routes
app.post('/api/content', generateContent)


`

export const codeOpenAi = 
`const openai = require('../config/openaiConfig');

const generateContent = async (req, res) => {

    const { content } = req.body;

    const answer = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system", 
                content: "You are a helpful assistant
                to help user to check English."
            },
            {
                role: 'user',
                content: \`Correct grammar and 
                refine the following sentences.: \${content}\`
            }
        ],
        temperature: 1,
        max_tokens: 500
    })

    res.status(200).json({
        answer: answer.data.choices[0].message.content,
    })
}
`

export const codeClient = 
`contentForm.addEventListener('submit', async (e) => {

    e.preventDefault();
    noResult.classList.add('deactive');
    isPending.classList.add('active');

    let question  = e.target.elements.content.value;
    formatQuestion(question);

    resultContainer.scrollTop = resultContainer.scrollHeight;

    fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: 
            contentForm.content.value })
    })
    .then(
        response => response.json()
    )
    .then((data) => {
        formatAnswer(data.answer);
    })
    .catch((error) => {
        const errorMsg = document.createElement('div');
        errorMsg.classList.add(error);
        errorMsg.innerText = error;

        resultContainer.appendChild(errorMsg);
    })
    .finally(
        () => {
            e.target.elements.content.value = '';
            isPending.classList.remove('active');
            resultContainer.scrollTop = 
            resultContainer.scrollHeight;
        }
    )
});
`


// TYPA TYPE CODE SNIPPETS //

export const codeAppend = 
`const addToFontList = () => {

    const fontDetails = (data) => {
        const fontCard = document.createElement('li');
        fontCard.classList.add("fontlist-card");
    
        const fontSample = document.createElement('div');
        fontSample.classList.add('card-aa', \`font--\${data.id}\`);
        fontSample.innerText = "Aa"; 

        // ---- append more children ---- //

        fontCard.appendChild(fontSample);
        slideContainer.appendChild(fontCard);
    }

    fontData.forEach(data => {
        fontDetails(data)
    });

}

addToFontList();
`

export  const codeEventHandler = 
`sizeControl.addEventListener('input', (e) => {
    let inputValue = e.target.value;
    sampleText.style.fontSize = inputValue + 'px';
    sizeValue.textContent = inputValue + 'px';
});

letterControl.addEventListener('input', (e) => {
    let inputValue = e.target.value;
    sampleText.style.letterSpacing = inputValue + 'px';
    letterValue.textContent = inputValue + 'px';
});

heightControl.addEventListener('input', (e) => {
    let inputValue = parseFloat(e.target.value) / 10;
    let formatValue = inputValue.toFixed(1);
    sampleText.style.lineHeight = formatValue;
    heightValue.textContent = formatValue;
});
`


// PORTFOLIO BUILD CODE SNIPPETS //

export const codePropDrilling = 
`// Context for Next Project Navigation
import { createContext, useState } from "react"
import { FetchProjectData } from '../assets/FetchProjectData'

export const ProjectContext = createContext()

export const ProjectContextProvider = ({ children }) => {

  const [ projectId, setProjectId ] = useState("")

  const allData = FetchProjectData()

  const projectData = allData.find((e) => {
    return e.id === projectId
  })

  const projectDataIndex = allData.findIndex((e) => {
    return e.id === projectId
  })

  const nextProjectData = 
  allData[projectDataIndex + 1] || null;

  return (
    <ProjectContext.Provider 
    value={ { projectData, setProjectId, nextProjectData }}>
        { children }
    </ProjectContext.Provider>
  )
}
`

export const codeReactRouter =
`

  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteRule ^ index.html [QSA, L]


`

export const codePagespeed = 
` // Code Splitting
const LazyWork = lazy(() => import('./pages/work'))

 /* -- Inside routes -- */
<Route path="/work/" 
  element={ 
    <Suspense fallback={<PageLoader />}>
      <LazyWork />
    </Suspense>
  }
/>

// Image Lazy Loading
export default function LazyImage({ 
  placeholderSrc, 
  placeholderClassName, 
  src, 
  alt, 
  className, 
  style }){

  const [isLoading, setIsLoading] = useState(true)
  const [view, setView] = useState("")
  const placeholderRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setView(src);
        observer.unobserve(placeholderRef.current);
      }
    })

    if (placeholderRef && placeholderRef.current) {
      observer.observe(placeholderRef.current)
    }
  }, [src])

  return ( /* -- return img elements -- */ )

`

// MY NOTES CODE SNIPPETS //

export const codeSearch =
`const searchForm = document.querySelector("#search-form");

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchInput = searchForm.querySelector('input');
    const searchQueries = searchInput.value.toLowerCase().trim();
    const noteTitles = document.querySelectorAll(".note-title");
    const error = document.querySelector("#error-msg");

    // store NodeLists as Array
    const articles = Array.from(document.querySelectorAll("article"));
    const searchQuery = Array.from(searchQueries.split(' '));
    const titleValues = Array.from(noteTitles).map((title) => (title.innerText.toLowerCase().split(' ')));

    let foundMatch = false;

    // Find and display articles that match keywords
    articles.forEach((article, index) => {
      if (titleValues[index].some((word) => searchQuery.includes(word))) {
        article.style.display = "block";
        foundMatch = true;
      } else {
        article.style.display = "none";
      }
    });

    // Display error block if no match is found
    if (!foundMatch) {
      error.style.display = "block";
    } else {
      error.style.display = "none";
    };

    searchInput.value = "";

});
`

export const codeSecurity = 
`// A method of CREATE in Note Class
public function create() {
  $sql = "INSERT INTO notes (name, body, course_number, user_id) VALUES ( ?, ?, ?, ? )";

  $stmt = self::$db->prepare($sql);
  $stmt->bind_param('ssii', $this->name, $this->body, $this->course_number, $this->user_id);
  $stmt->execute();

  $result = $stmt->get_result();

  // return results
  return $result;
}

// Clientside validation
$(document).ready(function() {

  $("#sign-up").validate({
    errorClass: 'error-text', 
    rules: {
      email: {
        required: true,
        email: true,
        maxlength: 320
      },
      // ...adding more rules //
    },
    messages: {
      password_confirm: 'Passwords must match.',
    },
    submitHandler: function(form){
      form.submit();
    }
});
`