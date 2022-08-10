import React from 'react';
import EyeIcon from './../icons/EyeIcon';

const EditorMain = ({ lightMode }) => {
  return (
    <>
      <div className="flex items-center justify-between w-full bg-tertiary">
        <div className="flex items-center justify-between w-full h-10 px-4 font-bold tracking-widest text-left text-gray-300 uppercase border-r border-white">
          Markdown
          <button>
            <EyeIcon />
          </button>
        </div>
        <div className="items-center justify-between hidden w-full px-4 py-2 font-bold tracking-widest text-left text-gray-300 uppercase border-l border-white md:flex">
          Preview
          <button>
            <EyeIcon />
          </button>
        </div>
      </div>

      {/* EDITOR HERE */}
      <div
        className={`flex items-start justify-between w-full md:h-[calc(100vh-7.5rem)] h-[calc(100vh-6rem)] bg-${
          lightMode ? 'white' : 'back'
        } overflow-hidden text-${lightMode ? 'back' : 'white'}`}
      >
        <div className="w-full h-full px-4 py-4 overflow-x-hidden overflow-y-auto text-left border-r-0 border-white md:border-r">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel itaque commodi fugit eos, consequatur saepe
          provident inventore ipsam quibusdam iste! Omnis quo labore, nam iste ratione ad nostrum quae, expedita dicta
          obcaecati voluptate iure ullam ipsa hic sed facilis illo amet libero doloremque maiores dolorem consectetur
          culpa? Explicabo nobis, inventore dolorum recusandae perspiciatis rem maiores molestiae doloremque magni
          asperiores quos error modi voluptates non, tempore quibusdam! Animi quasi tenetur magnam id quibusdam
          molestiae temporibus aspernatur repellat fuga enim consequuntur alias et repellendus assumenda pariatur
          necessitatibus rem expedita ex earum modi, facilis deserunt mollitia aliquam error. Nesciunt cupiditate nisi
          ipsum dignissimos labore iusto temporibus sint, eum dolore id corrupti impedit dolorum totam eligendi, et
          dolor velit consequatur cumque repellendus. Autem, molestias cumque et similique magnam id? Eos fuga repellat
          totam iste quasi odit ut illum animi voluptatem voluptas labore corrupti ratione accusamus eveniet, corporis
          ex harum iusto assumenda. Sit iusto rem ipsa animi ad nam consequuntur! Perferendis dicta doloribus corrupti
          doloremque et velit harum dolorem sapiente mollitia consectetur sed, voluptatum nam labore nesciunt unde cum
          vero consequatur est deleniti officiis modi maiores. Eligendi ducimus autem deserunt recusandae doloribus
          labore ipsam cumque earum consequatur deleniti omnis, aut reprehenderit et maiores soluta officia veritatis
          minima sapiente nesciunt modi repellat. Sint, quos omnis inventore, maiores minus itaque corrupti eum
          repellendus sequi vero nobis beatae pariatur cupiditate aspernatur similique deserunt perferendis, architecto
          accusamus neque! Nemo fugit tempore aliquam repudiandae cum quo quis repellat laudantium? Accusamus minus,
          itaque suscipit dolores praesentium id eos earum, quia vel amet nemo odit consequuntur, labore quos expedita.
          Omnis alias quos non assumenda facere, ratione autem iusto laboriosam eveniet inventore temporibus quo dolorem
          fuga, ab possimus iure magni asperiores quisquam atque maiores. Error nisi ducimus aspernatur assumenda quos
          aliquid dicta nemo quisquam fugiat unde, autem reiciendis, dolorum explicabo officiis modi animi reprehenderit
          earum excepturi non distinctio ab. Quo possimus, consequuntur voluptate quis labore deserunt accusantium ea
          dicta nostrum itaque, in est doloribus unde consequatur beatae explicabo corporis veritatis maiores autem.
          Inventore nisi tempore saepe, nemo ratione voluptate laboriosam laudantium placeat cupiditate excepturi,
          magnam facilis minus iste blanditiis magni laborum quaerat a accusantium omnis illum ducimus? Nam dolores
          totam magnam qui, ipsa corporis eveniet sed molestiae incidunt veritatis provident exercitationem cupiditate
          nihil autem dolorem voluptatum, ratione officiis quod neque aut eum consequatur quidem culpa nulla?
          Consequatur beatae autem, cumque harum optio illum eos doloribus ratione, recusandae vero explicabo temporibus
          pariatur, quod asperiores fugit? Id libero laboriosam, odit accusamus aliquid voluptatum vero iure quidem
          consequuntur, repellat itaque, facere sapiente quae quisquam consequatur quo. Accusamus, maiores incidunt
          quidem totam ex earum sit saepe voluptatibus? Eos minus corporis maiores totam harum eveniet sequi ipsa odio
          neque. Tenetur dignissimos odit sit eaque expedita debitis alias sequi ad. Sequi, est vitae exercitationem
          porro ex tenetur nam ullam similique harum ea iusto? Aspernatur qui magnam alias illo? Sunt, ut architecto
          soluta tempora rem explicabo. Similique a, porro unde ex quod molestiae minus provident, reiciendis saepe,
          adipisci fugiat. Pariatur ipsa voluptatibus praesentium odio dolores magnam, laboriosam alias minus facere.
        </div>
        <div className="hidden w-full h-full px-4 py-4 overflow-x-hidden overflow-y-auto text-left border-l-0 border-white md:border-l md:block">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem reprehenderit impedit, ipsa ad voluptas
          fugit rerum accusamus alias. Facilis laboriosam, soluta dolores, assumenda repellat illo mollitia aperiam
          aspernatur illum doloremque amet. Ratione quis mollitia facilis? Similique veritatis qui fuga voluptatibus
          labore aliquid at aliquam eos laudantium architecto culpa perferendis, eius ullam optio cum molestiae, dicta
          iure? Dolore, ex? Laboriosam expedita sint animi magnam nam, commodi dolorem neque, voluptatem repellat dicta
          earum veniam eligendi itaque veritatis laborum non, excepturi illum quidem eius consectetur! Nulla suscipit
          odio ex itaque non cupiditate illum unde nobis soluta, accusamus placeat, laboriosam dignissimos deserunt
          officiis numquam fugit velit dolorem saepe nostrum mollitia tempora magni exercitationem at dolorum? Placeat
          impedit blanditiis ducimus quibusdam error? Neque quas vel sunt id molestias sed repudiandae temporibus,
          mollitia eos dignissimos. Impedit debitis suscipit quaerat unde accusantium sunt, rem excepturi nulla saepe
          numquam culpa iure quas modi placeat delectus. Saepe id eos velit doloribus deserunt, quisquam facere
          laudantium! Inventore ipsum consequuntur repudiandae deleniti! Corrupti esse officiis sit asperiores pariatur.
          Minus fugiat aperiam ducimus, perspiciatis repudiandae, quam ea porro ab accusantium quis eligendi mollitia in
          ipsam animi corporis perferendis? Expedita repudiandae temporibus ullam, aut iste earum illum recusandae
          deleniti, ex nihil quia corporis mollitia. Ipsam eum maxime dicta dolorem voluptates omnis? Nisi, inventore
          quae. Natus est iusto nostrum consequuntur beatae doloribus exercitationem doloremque aliquid necessitatibus!
          Iusto laboriosam labore a blanditiis quis doloremque minus recusandae obcaecati tenetur sequi earum debitis
          nostrum voluptas quae beatae quia ex autem, impedit delectus. Blanditiis eaque totam, soluta ducimus rem
          dolore quisquam porro dolorem accusantium perspiciatis id, rerum error eveniet magnam architecto veritatis
          doloremque sapiente consequuntur nihil hic temporibus explicabo. Pariatur culpa, quos repudiandae, est dolore
          eaque non animi voluptates dolorem qui expedita deserunt. Tenetur eos repellat eum ad nam quidem animi et
          repudiandae eius quae error officia, ut accusantium consectetur, voluptates sequi beatae commodi! Quo facere
          possimus, quisquam dolore natus nisi tempora! Facere, id quia quam beatae illum maxime quaerat non, natus
          neque odio est necessitatibus placeat temporibus exercitationem assumenda consectetur veritatis. Ratione sit
          beatae mollitia obcaecati fuga labore velit, culpa quisquam laborum facilis officiis! Nobis modi temporibus
          dolores veniam corporis facilis voluptatum praesentium officiis quis. Eaque nostrum, earum vero animi dolore
          vitae voluptatibus quod inventore odit sit at quia, quasi, adipisci cumque. Temporibus distinctio repudiandae
          ab facilis accusamus accusantium harum nam, expedita nihil, quisquam quis amet velit labore? Sunt distinctio
          magni minus adipisci itaque nulla eius odit sequi iusto. Culpa, incidunt quis molestias quidem sapiente
          quibusdam nihil, aliquam dolor alias officiis dolorum quod necessitatibus ab adipisci magnam numquam, iure
          consequatur! Tempora porro tempore, dolores non soluta veniam nesciunt ea sed vero eveniet perspiciatis
          voluptates necessitatibus quo enim laborum pariatur sapiente ducimus hic eius laudantium consequatur cumque
          rerum sit. Eius vero dignissimos expedita facilis nisi ea maiores odit ducimus repellendus minima magni
          veritatis, impedit ipsum cum officia iste similique praesentium. Dignissimos magnam recusandae quas, possimus
          ullam provident quae eligendi aspernatur accusantium, iure minima. Commodi quae omnis quaerat. Nulla incidunt
          nam molestiae distinctio, odio ab necessitatibus harum voluptate iusto.
        </div>
      </div>
    </>
  );
};

export default EditorMain;
