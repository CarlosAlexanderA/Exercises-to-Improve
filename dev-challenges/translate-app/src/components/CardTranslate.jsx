import { ClipboardOutline, PaperAirplaneSolid, SpeakerSolid } from '../icons'

export function CardTranslate({ isResponse, submitFunc, text, showText }) {
  console.log(showText)
  return (
    <div className={`card-translate ${isResponse ? '' : 'response'}`}>
      <section className="head-translate">
        {isResponse && (
          <button className="btn-translate">Detect Language</button>
        )}
        <button className="btn-translate active">English</button>
        <button className="btn-translate">Spanish</button>
        <select className="btn-translate" name="" id="">
          <option value="Algo">Algo</option>
        </select>
      </section>
      <form action="#" onSubmit={submitFunc}>
        <section className="main-translate">
          <textarea
            name="text"
            id="text"
            placeholder="..."
            value={!isResponse && showText}
            readOnly={!isResponse}>
            {isResponse ? text : showText}
          </textarea>
          {isResponse && (
            <p>
              <span>0 </span>/ 500
            </p>
          )}
        </section>
        <section className="footer-translate">
          <div className="footer-options">
            <button>
              <SpeakerSolid style={{ marginRight: '8px' }} />
            </button>
            <button>
              <ClipboardOutline />
            </button>
          </div>
          {isResponse && (
            <button className="btn-send" type="submit">
              <span>
                <PaperAirplaneSolid />
              </span>
              Translate
            </button>
          )}
        </section>
      </form>
    </div>
  )
}
