import React, { useState } from 'react';
import SearchIcon from './../icons/SearchIcon';
import FilterIcon from './../icons/FilterIcon';
import FilterWindow from './FilterWindow';

const List = () => {
  const [query, setQuery] = useState('');
  const [showFilterWindow, setShowFilterWindow] = useState(false);

  return (
    <div className="w-full">
      <h1 className="w-full text-4xl font-bold tracking-wider text-center uppercase text-secondary sm:text-6xl">
        Your Documents
      </h1>
      <div className="relative flex items-center justify-between gap-5 my-12">
        {showFilterWindow && <FilterWindow />}
        <div className="flex items-center justify-start w-full gap-0">
          <label htmlFor="query" className="w-full h-full max-w-[50px] bg-secondary text-white p-3 rounded-l-md">
            <SearchIcon />
          </label>
          <input
            type="text"
            name="query"
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type here..."
            autoComplete="off"
            className="w-full max-w-xl px-3 py-2 text-lg font-medium bg-white border-2 outline-none rounded-r-md border-secondary text-back"
          />
        </div>
        <div>
          <button
            onClick={() => setShowFilterWindow((prev) => !prev)}
            className="w-full h-full max-w-[50px] bg-secondary text-white p-3 rounded-md"
          >
            <FilterIcon />
          </button>
        </div>
      </div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam iste sunt aliquid. Voluptatum deserunt rerum,
      iusto quaerat natus perferendis provident, quas mollitia magni aut quidem corrupti minus officia similique
      pariatur, architecto voluptatem a distinctio. Odio inventore neque molestiae esse, consequuntur maiores quibusdam
      illum ratione maxime ullam dolore non minus velit doloremque atque tempore! Hic, delectus. Labore, reiciendis?
      Quos ratione, reprehenderit dolores minus vitae molestiae ipsum, saepe, rem sint totam id nesciunt vero optio
      omnis modi qui aspernatur exercitationem iste ex doloremque error. Minima adipisci culpa, architecto quas sunt
      doloremque delectus provident vitae sed debitis est aliquam, sequi molestias labore minus? Enim laborum nulla id
      consequuntur velit sint praesentium, rerum quam delectus blanditiis ducimus nihil iusto quidem porro non
      dignissimos inventore optio soluta libero expedita eius quasi tempore reprehenderit debitis. Ratione eos
      consequuntur quia minima. Neque quas, adipisci quibusdam beatae, et, consequatur excepturi temporibus deserunt
      labore sint fugiat eos voluptatum expedita at voluptates ducimus. Dolor, dicta. Voluptate ducimus aliquid ipsam
      optio eveniet nihil, ad facere, quas laborum eius earum molestiae possimus id quod inventore beatae. Laborum
      excepturi dignissimos quae aliquam perferendis similique exercitationem itaque vero cumque. Ullam fugit optio
      itaque blanditiis, illum necessitatibus dicta? Inventore aliquam architecto sequi minima doloremque maxime
      officiis quaerat pariatur, porro deleniti distinctio, corrupti perspiciatis error deserunt magni ad vero, natus et
      omnis rem. Voluptatibus saepe ad, aliquid, voluptatum illum officiis quas odit molestiae, aspernatur neque nostrum
      amet eius. Eius dolorem earum atque ad asperiores, fuga libero quia. Doloremque quam officiis, odit sequi, itaque
      exercitationem consequatur atque facere libero praesentium laborum voluptas! Vel sequi nulla nam praesentium vero
      inventore expedita similique nihil consequuntur dolorem eveniet et, aliquid nisi provident voluptas ipsa suscipit
      laborum! Inventore velit doloremque nesciunt consequuntur voluptas eius, animi numquam, aliquam pariatur earum,
      dolor repudiandae? Architecto incidunt eaque, laboriosam quae aperiam eius animi mollitia facere sapiente delectus
      aliquid vitae necessitatibus sunt quia neque quibusdam! Cum amet magni quos distinctio aliquid maiores labore
      fugit itaque soluta consequatur accusamus nulla iure explicabo facilis, voluptatibus qui nam sint! Voluptas, quis
      aliquam cum in libero recusandae expedita eos impedit, quas reiciendis ad animi veniam laborum corrupti. Libero,
      laudantium nemo! Quam unde ad id, sunt incidunt officia architecto labore iste aliquam exercitationem, cumque cum
      minima quaerat. Aperiam architecto vero voluptatem quod unde deserunt, consequatur reiciendis a perspiciatis iste
      ducimus perferendis distinctio laudantium aspernatur alias doloremque provident repudiandae voluptatum vel?
      Corrupti adipisci recusandae officia veritatis! Rerum voluptas non doloremque quam distinctio placeat nemo ducimus
      nam, perferendis iure consequuntur nulla optio deleniti recusandae accusamus animi necessitatibus. Fuga ducimus ut
      quam eos aliquam! Dolor sequi tenetur inventore sit corrupti eos harum ut accusamus, vitae tempora dolorum
      sapiente nesciunt aut est beatae quo? Unde, officiis vero cupiditate voluptas velit corrupti iste nobis, ipsum
      dolorum commodi architecto alias delectus porro debitis, dolore tempore ab laboriosam perspiciatis harum minima
      perferendis? Quae earum, inventore obcaecati eum eius nesciunt iure quibusdam repellendus quis illum laborum?
      Corporis deserunt culpa voluptates dignissimos tenetur sit impedit omnis fuga modi sunt, odit doloremque
      architecto velit veritatis amet quasi aut harum inventore. Dolore?
    </div>
  );
};

export default List;
