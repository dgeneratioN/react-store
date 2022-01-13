const About = () => {
  return (
    <>
      <section className="specs">
        <h2>CPU</h2>
        <p>
          The main processor is a <strong>NEC VR4300</strong> that runs at{" "}
          <strong>93.75 MHz</strong>, it&rsquo;s a binary-compatible version of
          Silicon Graphics' <strong>MIPS R4300i</strong> that features:
        </p>
        <ul>
          <li>
            <strong>Two modes of operation</strong>:
            <ul>
              <li>
                <strong>32-bit mode</strong>: Traditional mode and the most
                common one for games. Words are 32-bit long.
              </li>
              <li>
                <strong>64-bit mode</strong>: Words are 64-bit long (called
                &lsquo;double-words&rsquo;). This includes registers, data and
                memory addresses - though only 40 bits are decoded in the latter
                case. Consequently, large data can be operated more efficiently,
                although this also increments the size of the program
                considerably (for instance, pointers occupy 8 Bytes instead of
                4).
              </li>
            </ul>
          </li>
          <li>
            <strong>32 general-purpose registers</strong>: These are 32-bit wide
            in &lsquo;32-bit mode&rsquo; and 64-bit wide in &lsquo;64-bit
            mode&rsquo;.
          </li>
          <li>
            The <strong>MIPS III ISA</strong>: A RISC instruction set that
            succeeds MIPS II. It features new instructions that operate
            double-words. The instructions format is 32-bit long, independently
            of the mode.
            <ul>
              <li>
                It&rsquo;s worth mentioning that since MIPS II, load delay slots
                are gone for good, though branch delay ones still persist.
              </li>
            </ul>
          </li>
          <li>
            An internal <strong>64-bit bus</strong> connected to an{" "}
            <strong>external 32-bit data bus</strong>: While double-words
            won&rsquo;t degrade performance when operated internally, the CPU
            will still need to expend extra cycles to move 64-bit data
            throughout the system.
          </li>
          <li>
            <strong>32-bit address bus</strong>: Up to 4 GB of physical memory
            can be addressed.
          </li>
          <li>
            <strong>5-stage pipeline</strong>: Up to five instructions can be
            allocated for execution (a detailed explanation can be found in a
            previous article.
          </li>
          <li>
            <strong>24 KB L1 cache</strong>: Divided into 16 KB for instructions
            and 8 KB for data.
          </li>
        </ul>
        <p>
          An internal <strong>Floating-point Unit</strong> (FPU) is also
          included in this package. The VR4300 identifies it as a co-processor
          (CP1), however, the unit is fitted next to the ALU and it&rsquo;s only
          accessed through the CPU&rsquo;s internal ALU pipeline, meaning
          there&rsquo;s no co-processing per se. Though it contains a dedicated
          register file and will speed up operations with 64-bit and 32-bit
          floating-point numbers. The FPU follows the IEEE754 standard.
        </p>
      </section>
    </>
  );
};

export default About;
