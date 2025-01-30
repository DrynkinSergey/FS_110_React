const Home = () => {
  return (
    <div>
      <h2>Home page</h2>
      <div className='xl:grid xl:grid-cols-2 grid grid-cols-1'>
        <p className='text-2xl px-4 mt-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id animi, tempora nihil ipsa reprehenderit sed modi, reiciendis impedit doloremque
          magnam saepe, sequi similique consequuntur corporis iusto illo facere maiores eius. Velit numquam reprehenderit officia aperiam ipsa odit
          ipsam cum libero. Labore doloribus corrupti iste nemo in molestias quod eius. Accusamus, veniam! Cupiditate ullam minus est dolor debitis
          numquam dolorum deleniti. Sunt aspernatur tempore repudiandae laudantium laborum, cupiditate praesentium? Ipsam commodi, culpa nostrum
          soluta atque, architecto magnam amet rem, suscipit maiores dicta quos necessitatibus? Eos ducimus ut omnis reprehenderit, iure veniam!
        </p>
        <p className='text-2xl px-4 mt-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id animi, tempora nihil ipsa reprehenderit sed modi, reiciendis impedit doloremque
          magnam saepe, sequi similique consequuntur corporis iusto illo facere maiores eius. Velit numquam reprehenderit officia aperiam ipsa odit
          ipsam cum libero. Labore doloribus corrupti iste nemo in molestias quod eius. Accusamus, veniam! Cupiditate ullam minus est dolor debitis
          numquam dolorum deleniti. Sunt aspernatur tempore repudiandae laudantium laborum, cupiditate praesentium? Ipsam commodi, culpa nostrum
          soluta atque, architecto magnam amet rem, suscipit maiores dicta quos necessitatibus? Eos ducimus ut omnis reprehenderit, iure veniam!
        </p>
      </div>
      <div className='flex gap-2'>
        <button className='btn btn-neutral'>Neutral</button>
        <button className='btn btn-primary'>Primary</button>
        <button className='btn btn-secondary'>Secondary</button>
        <button className='btn btn-accent'>Accent</button>
        <button className='btn btn-info'>Info</button>
        <button className='btn btn-success'>Success</button>
        <button className='btn btn-warning'>Warning</button>
        <button className='btn btn-error'>Error</button>
      </div>
      <ul className='steps'>
        <li className='step step-info'>Fly to moon</li>
        <li className='step step-info'>Shrink the moon</li>
        <li className='step step-info'>Grab the moon</li>
        <li className='step step-error' data-content='?'>
          Sit on toilet
        </li>
      </ul>
      <ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical'>
        <li>
          <div className='timeline-middle'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' class='h-5 w-5'>
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='timeline-start mb-10 md:text-end'>
            <time className='font-mono italic'>1984</time>
            <div className='text-lg font-black'>First Macintosh computer</div>
            The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in
            establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed
            in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className='timeline-middle'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' class='h-5 w-5'>
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='timeline-end md:mb-10'>
            <time className='font-mono italic'>1998</time>
            <div className='text-lg font-black'>iMac</div>
            iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has been the primary part of Apple's consumer
            desktop offerings since its debut in August 1998, and has evolved through seven distinct forms
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className='timeline-middle'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' class='h-5 w-5'>
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='timeline-start mb-10 md:text-end'>
            <time className='font-mono italic'>2001</time>
            <div className='text-lg font-black'>iPod</div>
            The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc. The first
            version was released on October 23, 2001, about 8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated
            450 million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At over 20 years, the iPod brand is the
            oldest to be discontinued by Apple
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className='timeline-middle'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' class='h-5 w-5'>
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='timeline-end md:mb-10'>
            <time className='font-mono italic'>2007</time>
            <div className='text-lg font-black'>iPhone</div>
            iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system. The first-generation iPhone was
            announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As
            of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market
            share
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className='timeline-middle'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' class='h-5 w-5'>
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='timeline-start mb-10 md:text-end'>
            <time className='font-mono italic'>2015</time>
            <div className='text-lg font-black'>Apple Watch</div>
            The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and
            wireless telecommunication, and integrates with iOS and other Apple products and services
          </div>
        </li>
      </ul>

      <div className='hero bg-base-200 min-h-screen'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold'>Login now!</h1>
            <p className='py-6'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
          </div>
          <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
            <div className='card-body'>
              <fieldset className='fieldset'>
                <label className='fieldset-label'>Email</label>
                <input type='email' className='input' placeholder='Email' />
                <label className='fieldset-label'>Password</label>
                <input type='password' className='input' placeholder='Password' />
                <div>
                  <a className='link link-hover'>Forgot password?</a>
                </div>
                <button className='btn btn-neutral mt-4'>Login</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      <div className='join join-vertical bg-base-100'>
        <div className='collapse collapse-arrow join-item border-base-300 border'>
          <input type='radio' name='my-accordion-4' defaultChecked />
          <div className='collapse-title font-semibold'>How do I create an account?</div>
          <div className='collapse-content text-sm'>Click the "Sign Up" button in the top right corner and follow the registration process.</div>
        </div>
        <div className='collapse collapse-arrow join-item border-base-300 border'>
          <input type='radio' name='my-accordion-4' />
          <div className='collapse-title font-semibold'>I forgot my password. What should I do?</div>
          <div className='collapse-content text-sm'>Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
        </div>
        <div className='collapse collapse-arrow join-item border-base-300 border'>
          <input type='radio' name='my-accordion-4' />
          <div className='collapse-title font-semibold'>How do I update my profile information?</div>
          <div className='collapse-content text-sm'>Go to "My Account" settings and select "Edit Profile" to make changes.</div>
        </div>
      </div>
    </div>
  );
};
export default Home;
