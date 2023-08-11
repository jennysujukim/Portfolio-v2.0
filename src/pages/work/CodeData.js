// DAILY PROTEIN CODE SNIPPETS //

export const codeStateManagement = 
`// set initial state
const initialState: AuthInitialStateModel = {
  user: null,
  authIsReady: false,
};

// create slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserModel>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    authIsReady: (state, action: PayloadAction<UserModel>) => {
      state.user = action.payload;
      state.authIsReady = true;
    },
  },
});

export const { 
    login, 
    logout, 
    authIsReady 
} = authSlice.actions;
export const authReducer = authSlice.reducer;
`

export const codeBackend = 
`// -- inside 'controllers/tracker-controllers.js' -- //
// handle CREATE request
async function createTracker (req, res, next) {
    // deconstruct req.body
    const { uid, name, protein } = req.body;

    // declare new query with MongoDB Tracker schema
    const createdTracker = new Tracker({ uid, name, protein })

    try {
        // save query to MongoDB
        await createdTracker.save();
    } catch(err) {
        const error = new HttpError('Creating tracker failed, please try again', 500);
        return next(error);
    }

    if(!createdTracker) {
        const error = new HttpError('Could not create tracker', 404);
        return next(error);
    }

    res.status(201).json({ tracker: createdTracker });
}

exports.createTracker = createTracker;

// -- inside 'routes/tracker-routes.js' -- //
const express = require('express');
const trackerControllers = require('../controllers/tracker-controllers');
const router = express.Router();

// for create tracker
router.post('/', trackerControllers.createTracker);
// ... add more routes

module.exports = router;
`

export const codeDatabase = 
` // -- inside 'server.js' -- //
// run server when mongoDB is connected
mongoose
    .connect(\`\${process.env.mongodbUrl}\`)
    .then(() => {
        app.listen(PORT, () => {
            console.log(\`Server is running on port \${PORT}\`) ;
         })
    })
    .catch((error) => {
        console.log(error);
    });

// -- inside 'models/tracker.js' -- //
// create Tracker Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackerSchema = new Schema({
    uid: { type: String, required: true },
    name: { type: String, required: true },
    protein: { type: Number, required: true }
})

module.exports = mongoose.model('Tracker', trackerSchema)
`

export const codeFrontend = 
`function FoodList({ lists }: FoodListProps ) {

  // in order to store user's uid in traker's database tgt when handleClick
  const { user } = useAuthContext()

  // Create tracker's food list to database (server) when user clicks add button
  const handleClick = ( { foodName, foodProtein } : AddFoodProps ) => {

      axios.post(\`\${process.env.REACT_APP_SERVER_PORT}/api/tracker\`, {
          uid: user?.uid,
          name: foodName,
          protein: foodProtein
      })
      .catch((error) => {
          console.error("Error making tracker request:", error)
      })
  }

return ( /* ... */ )
}

export default FoodList

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

// TIDALFEST CODE SNIPPETS //

export const codePayPal = 
`// OrderContext.js
export const OrderContextProvider = ({ children }) => {

  // ...code to handle order states globally...

  // Save total order amount to localStorage
  useEffect(() => {
    setOrder(String(total))
    const saveOrder = localStorage.setItem("order", order)
    return saveOrder
  }, [total, setOrder, order])

  // ...return OrderContext.Provider...
}

// PayPalButton components
export default function PaypalButton() {

  const createOrder = (data, actions) => {
    // Get total order amount from localStorage
    const savedOrder = localStorage.getItem("order")

    return actions.order.create({
      purchase_units: [
        { amount: { value: \`\${savedOrder}\` }}
      ]
    })
  }

  // ... onApprove function and return component ...
}
`

export const codeAuthContext = 
` // AuthContext.js
// state is the current state, 
// action is what we want to do to the state
const authReducer = (state, action) => {
  switch(action.type) {
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

export const AuthContextProvider = ({ children }) => {
  // takes authReducer function above and an initial state
  const [ state, dispatch ] = useReducer(authReducer, {
    user: null,
    authIsReady: false
  })

  // ... useEffect code to handle authChange ...

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

`